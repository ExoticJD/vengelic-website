"use client";

import { useState, useEffect } from "react";

export const useLocation = () => {
  const [city, setCity] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.city) {
          setCity(data.city);
        } else {
          setCity("Global");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setCity("Global");
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return { city, loading };
};
