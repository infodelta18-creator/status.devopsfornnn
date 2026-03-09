// Configuration file for all monitored sites
import {
  Rocket,
  Monitor,
  BookOpen,
  Package,
  Compass,
  Newspaper,
  Cloud,
  Container,
  FlaskConical,
  Wrench,
  FileText,
  BarChart3,
} from "lucide-react";

const sites = [
  {
    id: "main",
    name: "Netlivy TV",
    description:
      "Online TV,radio and amediateka.Explore our телепередачи",
    url: "https://netlivys.vercel.app",
    icon: Rocket,
  },
  {
    id: "projects",
    name: "Netlivy DevOps",
    description: "A comprehensive collection of DevOps tools, best practices, and resources for modern software development and operations.",
    url: "https://netlivydevops.vercel.app",
    icon: Monitor,
  },
  {
    id: "docs",
    name: "Netlivy News",
    description: "More than 900 daily news and a user-friendly interface ",
    url: "https://netlivynews.vercel.app",
    icon: BookOpen,
  },
  {
    id: "repos",
    name: "Netlivy Crypto",
    description: "Live statistics of internationally recognized cryptocurrencies around the world",
    url: "https://netlivycrypto.vercel.app",
    icon: BarChart3,
  },
  {
    id: "jobs",
    name: "Netlivy Weathers",
    description: "Weather information for all countries in the world",
    url: "https://netlivyweathers.vercel.app",
    icon: Compass,
  },
  {
    id: "blog",
    name: "Netlivy Quiz",
    description: "Test your knowledge through a set of challenging questions",
    url: "https://netlivyquizes.vercel.app",
    icon: Newspaper,
  },
  {
    id: "cloud",
    name: "Netlivy Music",
    description: "Listen to your favorite music anytime, anywhere, without restrictions.",
    url: "https://netlivymc.vercel.app",
    icon: BookOpen,
  },
  {
    id: "docker2k8s",
    name: "ByteX portfolio",
    description: "Master class design",
    url: "https://bytexllc.vercel.app",
    icon: Container,
  },
  {
    id: "devopslab",
    name: "Netlivy Radio",
    description:
      "Master class music & ritm",
    url: "https://netlivys.vercel.app/radio",
    icon: Rocket,
  },
];

export default sites;

// Helper functions for working with sites
export const getSiteStatus = async (site) => {
  // In a real application, this would make an actual HTTP request
  // or connect to a monitoring service like Pingdom, UptimeRobot, etc.

  // For now, we'll simulate status with random values
  // In production, replace this with actual status checks
  const statusOptions = ["operational", "degraded", "outage"];
  const randomStatus =
    Math.random() > 0.8
      ? Math.random() > 0.5
        ? "degraded"
        : "outage"
      : "operational";

  const lastChecked = new Date();

  return {
    id: site.id,
    name: site.name,
    url: site.url,
    status: randomStatus,
    statusText:
      randomStatus === "operational"
        ? "Operational"
        : randomStatus === "degraded"
          ? "Degraded Performance"
          : "Outage",
    lastChecked,
    responseTime: Math.floor(Math.random() * 500) + 100, // 100-600ms
  };
};

export const checkAllSites = async () => {
  const statusPromises = sites.map((site) => getSiteStatus(site));
  return Promise.all(statusPromises);
};
