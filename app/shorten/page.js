"use client";

import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const showMessage = (text, type = "success") => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  const generate = async () => {
    if (!url) {
      showMessage("Please enter a URL to shorten.", "error");
      return;
    }

    setIsLoading(true);
    setGeneratedLink("");
    setMessage(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl: shortUrl }),
      });

      const result = await res.json();

      if (!res.ok) {
        showMessage(result.message || "Something went wrong!", "error");
        return;
      }

      const host = process.env.NEXT_PUBLIC_HOST || window.location.origin;
      const finalShort = shortUrl || result.shorturl || result.shortUrl;
      const finalLink = `${host}/${finalShort}`;

      setGeneratedLink(finalLink);
      showMessage(result.message || "Short link created!", "success");

      setUrl("");
      setShortUrl("");
    } catch (error) {
      console.error(error);
      showMessage("Error generating short link. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (generatedLink) {
      navigator.clipboard
        .writeText(generatedLink)
        .then(() => showMessage("Copied to clipboard!", "success"))
        .catch(() => showMessage("Failed to copy link.", "error"));
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-950 px-4 sm:px-6 lg:px-8 py-10">
      {/* ✅ Toast Message */}
      {message && (
        <div
          className={`fixed top-20 right-4 px-5 py-3 rounded-lg shadow-lg text-white font-medium z-50 transition-all duration-300 ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* ✅ Main Card */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 flex flex-col gap-6">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-400">
          Generate Your Short URL
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your long URL"
            disabled={isLoading}
            className="w-full px-4 py-3 sm:py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300 text-sm sm:text-base"
          />

          <div className="flex flex-col sm:flex-row sm:items-center bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-700 focus-within:ring-2 focus-within:ring-purple-500 transition duration-300">
            <span className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-0 sm:mr-2 whitespace-nowrap">
              bitlinks.vercel.app/</span>
            <input
              type="text"
              value={shortUrl}
              onChange={(e) =>
                setShortUrl(e.target.value.replace(/[^a-zA-Z0-9-]/g, ""))
              }
              placeholder="eg : xyz"
              disabled={isLoading}
              className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm sm:text-base"
            />
          </div>

          <button
            onClick={generate}
            disabled={isLoading}
            className={`w-full text-sm sm:text-base bg-purple-600 text-white font-bold py-3 sm:py-4 rounded-lg shadow-lg transition duration-300 ${
              isLoading
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-purple-700 hover:shadow-xl transform hover:scale-[1.02]"
            }`}
          >
            {isLoading ? "Generating..." : "Generate Short Link"}
          </button>
        </div>

        {/* ✅ Generated Link */}
        {generatedLink && (
          <div className="mt-4 p-4 sm:p-5 bg-gray-800 rounded-lg border border-purple-600 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">
              Your Short Link:
            </span>
            <code className="text-purple-400 break-all text-center sm:text-left text-sm sm:text-base">
              <Link
                target="_blank"
                href={generatedLink}
                className="hover:underline"
              >
                {generatedLink}
              </Link>
            </code>
            <button
              onClick={copyToClipboard}
              className="bg-purple-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-lg transition duration-300 hover:bg-purple-700"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
