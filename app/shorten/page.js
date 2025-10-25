"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [generatedLink, setGeneratedLink] = useState("")
    const [message, setMessage] = useState(null) // { text: "...", type: "success" | "error" }
    const [isLoading, setIsLoading] = useState(false)

    // Function to replace alert() and show a custom message
    const showMessage = (text, type = 'success') => {
        setMessage({ text, type });
        setTimeout(() => setMessage(null), 5000); // Hide after 5 seconds
    }

    const generate = () => {
        if (!url) {
            showMessage("Please enter a URL to shorten.", "error");
            return;
        }

        setIsLoading(true);
        setGeneratedLink("");
        setMessage(null);

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        // Mock host since process.env is unavailable here
        const mockHost = "https://bit.ly-clone.com"; 
        
        const raw = JSON.stringify({
            "url": url,
            "shorturl": shortUrl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        // Note: Using a placeholder path for the API call
        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                const finalShortUrl = shortUrl || result.shortUrl;
                setGeneratedLink(`${mockHost}/${finalShortUrl}`);
                showMessage(result.message, 'success');
                setUrl("");  
                setShortUrl("");
            })
            .catch((error) => {
                showMessage("An error occurred. Please try again.", "error");
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const copyToClipboard = () => {
        if (generatedLink) {
            navigator.clipboard.writeText(generatedLink).then(() => {
                showMessage("Link copied to clipboard!", "success");
            }).catch(() => {
                showMessage("Could not copy link. Please try manually.", "error");
            });
        }
    };

    return (
        <div className='min-h-[calc(100vh-64px)] flex items-start justify-center p-4 sm:p-8'>
            
            {/* Custom Message Notification */}
            {message && (
                <div 
                    className={`fixed top-20 right-4 p-4 rounded-lg shadow-xl text-white transition-opacity duration-300 z-50 
                        ${message.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}
                >
                    {message.text}
                </div>
            )}

            {/* Main Card */}
            <div className='w-full max-w-lg bg-gray-800 my-8 p-6 sm:p-10 rounded-xl shadow-2xl flex flex-col gap-6 border-t-4 border-purple-500 animate-slideInDown'>
                
                <h1 className='font-extrabold text-3xl text-purple-400 text-center'>Generate Your Short URLs</h1>
                
                <div className='flex flex-col gap-4'>
                    <input 
                        type="url"
                        value={url}
                        className='w-full px-4 py-3 bg-gray-700 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300'
                        placeholder='Enter your long URL'
                        onChange={e => { setUrl(e.target.value) }} 
                        disabled={isLoading}
                    />

                    <div className='flex items-center bg-gray-700 rounded-lg p-3 border border-gray-700 focus-within:ring-2 focus-within:ring-purple-500 transition duration-300'>
                        <span className='text-gray-400 text-sm mr-2 whitespace-nowrap'>bitlinks.vercel.com/</span>
                        <input 
                            type="text"
                            value={shortUrl}
                            className='flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none'
                            placeholder='Custom back-half'
                            onChange={e => { setShortUrl(e.target.value.replace(/[^a-zA-Z0-9-]/g, '')) }}
                            disabled={isLoading}
                        />
                    </div>
                    
                    <button 
                        onClick={generate} 
                        className={`w-full bg-purple-600 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 hover:bg-purple-700 hover:shadow-xl transform ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01]'}`}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Generating...' : 'Generate Short Link'}
                    </button>
                </div>

                {generatedLink && (
                    <div className='mt-4 p-4 bg-gray-900 rounded-lg border border-purple-600 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn'>
                        <span className='font-bold text-lg text-white whitespace-nowrap'>Your Short Link:</span>
                        <code className='text-purple-400 break-all text-center sm:text-left'>
                            <Link target="_blank" href={generatedLink} className='hover:underline'>{generatedLink}</Link> 
                        </code>
                        <button 
                            onClick={copyToClipboard}
                            className='bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-lg transition duration-300 hover:bg-purple-700 flex-shrink-0'
                        >
                            Copy
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shorten