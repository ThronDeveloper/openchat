"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";


const ChevronDownIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);










const ArrowUpIcon = () => (

    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
);


const DiscordIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.947 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
    </svg>
);

const GithubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.43.372.823 1.102.823 2.222c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
);

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);




const ThinkingIndicator = () => (
    <div className="thinking-indicator">
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
    </div>
);


const TypewriterText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    
    useEffect(() => {
        if (displayedText.length < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, 10);
            return () => clearTimeout(timer);
        }
    }, [text, displayedText]);

    return (
        <div className="markdown-content">
            <ReactMarkdown>{displayedText}</ReactMarkdown>
        </div>
    );
};





const suggestions = [
    { label: "Brainstorm", prompt: "Give me 5 creative ideas for a minimalist project." },
    { label: "Code", prompt: "Write a high-quality React code snippet for a chat UI." },
    { label: "Summarize text", prompt: "Summarize the key points of the latest AI trends." },
    { label: "Get advice", prompt: "What is the best approach to learn Next.js effectively?" },
    { label: "More", prompt: "Help me explore more topics like history or science." },
];


export default function SvetraChatPage() {
    const [inputValue, setInputValue] = useState("");
    const [socialOpen, setSocialOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);



    const [isTyping, setIsTyping] = useState(false);
    
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const apiKey = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || "";
    const selectedModel = process.env.NEXT_PUBLIC_DEFAULT_MODEL || "openai/gpt-4o-mini";

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [inputValue]);

    const handleResetChat = () => {
        setMessages([]);
    };

    const handleSubmit = async (e?: React.FormEvent, directText?: string) => {
        if (e) e.preventDefault();
        const textToSend = directText || inputValue;
        if (!textToSend.trim() || isTyping) return;

        const userMessage = { role: "user", content: textToSend };

        const chatHistory = [...messages, userMessage];
        setMessages([...chatHistory, { role: "assistant", content: "" }]);
        setInputValue("");
        setIsTyping(true);

        try {
            const url = "https://openrouter.ai/api/v1/chat/completions";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:3000",
                    "X-Title": "Svetra Chat"
                },

                body: JSON.stringify({
                    model: selectedModel,
                    messages: chatHistory.map(m => ({ role: m.role, content: m.content })),
                    stream: true,
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                let errMsg = "API request failed";
                try {
                    const errorJson = JSON.parse(errorText);
                    errMsg = errorJson.error?.message || errMsg;
                } catch (e) {
                    errMsg = `${errMsg} (${response.status})`;
                }
                throw new Error(errMsg);
            }


            const reader = response.body?.getReader();
            if (!reader) return;

            let assistantContent = "";


            const decoder = new TextDecoder();
            let buffer = "";
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split("\n");
                buffer = lines.pop() || "";
                
                for (const line of lines) {
                    const trimmed = line.trim();
                    if (!trimmed || trimmed === "data: [DONE]") continue;

                    if (trimmed.startsWith("data: ")) {
                        const message = trimmed.replace(/^data: /, "");
                        try {
                            const parsed = JSON.parse(message);
                            const content = parsed.choices[0]?.delta?.content || "";
                            if (content) {
                                assistantContent += content;
                                setMessages(prev => {
                                    const newMsgs = [...prev];
                                    newMsgs[newMsgs.length - 1].content = assistantContent;
                                    return newMsgs;
                                });
                            }
                        } catch (e) {
                            // Silent catch for partial JSON
                        }
                    }
                }
            }

        } catch (err) {
            console.error("Chat error:", err);
            setMessages(prev => [...prev, { role: "assistant", content: "Error: Could not reach the AI. Please verify your .env configuration." }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="svetra-page">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-left">
                    <div className="branding-wrapper">
                        <span className="brand-openchat">OpenChat</span>

                        <span className="brand-by">by Svetra</span>
                    </div>
                </div>
                <div className="nav-right">
                    <div className="social-wrapper">
                        <div className="social-trigger" onClick={() => setSocialOpen(!socialOpen)}>
                            <span className="logo-text">Links</span>
                            <ChevronDownIcon />
                        </div>

                        {socialOpen && (
                            <div className="social-dropdown">
                                <button className="dropdown-item">
                                    <DiscordIcon />
                                    <span>Discord</span>
                                </button>
                                <button className="dropdown-item">
                                    <GithubIcon />
                                    <span>Github</span>
                                </button>
                                <button className="dropdown-item">
                                    <InstagramIcon />
                                    <span>Instagram</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>


            </nav>


            {/* Main Content */}
            <main className="main-content">
                {messages.length === 0 ? (
                    <div className="hero-section">
                        <h1 className="headline">What can I help with ?</h1>
                        <div className="suggestions">
                            {suggestions.map((s, i) => (
                                <button key={i} className={`suggestion-pill ${s.label === "More" ? "suggestion-more" : ""}`} onClick={() => {
                                    setInputValue(s.prompt);
                                    textareaRef.current?.focus();
                                }}>
                                    {s.label}
                                </button>

                            ))}
                        </div>

                    </div>
                ) : (
                    <div className="chat-container">
                        <div className="messages-list">
                            {messages.map((m, i) => (
                                <div key={i} className={`message-item ${m.role}`}>
                                    <div className="message-label">{m.role === "user" ? "You" : "Svetra"}</div>
                                    <div className="message-content">
                                        {m.role === "assistant" ? (
                                            !m.content && isTyping ? (
                                                <ThinkingIndicator />
                                            ) : (
                                                <TypewriterText text={m.content} />
                                            )
                                        ) : (
                                            m.content
                                        )}
                                    </div>

                                </div>
                            ))}



                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                )}

                {/* Chat Input - Always Visible */}
                <div className={`input-container ${messages.length > 0 ? "sticky-input" : ""}`}>
                    <div className="input-wrapper">
                        <form onSubmit={handleSubmit} className="input-form">
                            <textarea
                                ref={textareaRef}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask anything"
                                className="chat-input"
                                rows={1}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        handleSubmit(e);
                                    }
                                }}
                            />
                            <div className="input-actions">
                                <div className="action-left">
                                </div>




                                <div className="action-right">
                                    <button type="submit" className="btn-send" disabled={isTyping || !inputValue.trim()}>
                                        <ArrowUpIcon />
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </main>
            
            {messages.length > 0 && (
                <button className="fixed-new-chat" onClick={handleResetChat}>
                    <span>New Chat</span>
                    <ArrowUpIcon />
                </button>
            )}








        </div>
    );
}
