import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, User, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Client, Databases, Permission, Role } from "appwrite";

export function Footer() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0); 
  const [sessionTime, setSessionTime] = useState(0); 

  const socialLinks = [
    { icon: Github, href: "https://github.com/xagar18", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/xagar", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/xagarr18", label: "Twitter" },
    { icon: Mail, href: "mailto:sagaryadav6352@gmail.com", label: "Email" },
  ];

  useEffect(() => {
    const client = new Client();
    const databases = new Databases(client);

    const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
    const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
    const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
    const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
    const documentId = import.meta.env.VITE_APPWRITE_DOCUMENT_ID;

    // Check if environment variables are loaded correctly
    if (!endpoint || !projectId || !databaseId || !collectionId || !documentId) {
      console.error("Environment variables are not defined");
      return;
    }

    client.setEndpoint(endpoint).setProject(projectId);

    const sessionStartTime = Date.now();

    const fetchAndIncrement = async () => {
      try {
        const response = await databases.getDocument(databaseId, collectionId, documentId);
        const currentCount = response.visitors || 0;
        const totalTimeSpent = response.totalTime || 0;

        const newCount = currentCount + 1;
        setVisitorCount(newCount);
        setTotalTime(totalTimeSpent);

        await databases.updateDocument(databaseId, collectionId, documentId, { 
          visitors: newCount, 
          totalTime: totalTimeSpent 
        });
      } catch (error: any) {
        if (error.code === 404) {
          try {
            await databases.createDocument(databaseId, collectionId, documentId, { 
              visitors: 1, 
              totalTime: 0 
            }, [
              Permission.read(Role.any()), 
              Permission.update(Role.any())
            ]);
            setVisitorCount(1);
            setTotalTime(0);
          } catch (createError) {
            console.error(createError);
          }
        } else {
          console.error(error);
        }
      }
    };

    const endSession = async () => {
      const sessionEndTime = Date.now();
      const sessionDuration = Math.floor((sessionEndTime - sessionStartTime) / 1000);
      setSessionTime(sessionDuration);

      try {
        const response = await databases.getDocument(databaseId, collectionId, documentId);
        const currentTotalTime = response.totalTime || 0;
        const newTotalTime = currentTotalTime + sessionDuration;

        await databases.updateDocument(databaseId, collectionId, documentId, { 
          totalTime: newTotalTime 
        });
        setTotalTime(newTotalTime);
      } catch (error) {
        console.error(error);
      }
    };

    const sendTimeToServer = async () => {
      const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 1000);
      try {
        const response = await databases.getDocument(databaseId, collectionId, documentId);
        const currentTotalTime = response.totalTime || 0;
        const newTotalTime = currentTotalTime + sessionDuration;

        await databases.updateDocument(databaseId, collectionId, documentId, { 
          totalTime: newTotalTime 
        });
        setTotalTime(newTotalTime);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAndIncrement();

    const intervalId = setInterval(() => {
      const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 1000);
      setSessionTime(sessionDuration);
    }, 1000);

    const sendIntervalId = setInterval(() => {
      sendTimeToServer();
    }, 10000); 

    return () => {
      clearInterval(intervalId);
      clearInterval(sendIntervalId);
      endSession();
    };
  }, []);

  const formattedTotalTime = `${String(Math.floor((totalTime + sessionTime) / 60)).padStart(2, '0')}:${String((totalTime + sessionTime) % 60).padStart(2, '0')}`;

  return (
    <footer className="py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto glass rounded-2xl p-8"
      >
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-2xl font-bold">Let's Connect</h2>
          <div className="flex gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-full hover:scale-110 transition-transform duration-300"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
          <div className="flex gap-6 items-center mt-4 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
              <p>Total Visitors: {visitorCount}</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              <p>Time Spent: {formattedTotalTime}</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Passionately created with ❤️ by Sagar.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
