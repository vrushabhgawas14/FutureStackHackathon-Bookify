import { useEffect, useRef, useState } from "react";
import { Headphones, FileText, Brain, BookMarked, Crown } from "lucide-react";
import AudioControl from "../components/AudioControl";
import toast, { Toaster } from "react-hot-toast";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export default function Home() {
  function FeatureCard({ icon, title, description }: any) {
    return (
      <div className="bg-borderColor_secondary p-8 rounded-lg shadow-lg text-center w-[50vw] sm:w-[80vw]">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-textColor_secondary">{description}</p>
      </div>
    );
  }

  function UseCaseCard({ title, description, image }: any) {
    return (
      <div className="bg-borderColor_secondary w-[50vw] sm:w-[80vw] rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-textColor_secondary">{description}</p>
        </div>
      </div>
    );
  }

  const handleDownload = async () => {
    if (true) {
      toast.error("No summary to download");
      return;
    }
  };

  const handleCopy = async () => {
    try {
      if (true) {
        toast.success("Copied to clipboard!");
      } else {
        toast.error("Nothing to Copy!");
      }
    } catch (error) {
      toast.error("Failed to copy text");
    }
  };

  return (
    <>
      <main>
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        {/* Output Section */}
        <section className="flex flex-col items-center justify-center w-full mb-10">
          <div className="w-[70vw] sm:w-[90vw] flex flex-col space-y-4 py-4">
            {/* Answer Text */}
            <div className="flex items-center space-x-4">
              <img
                src={require("../assets/svgs/sparkles.svg").default}
                alt="Sparkles"
                className="w-6 h-6"
              />
            </div>
            {/* Actual Answer */}
            <div className="border border-borderColor_primary rounded-xl bg-backgroundDull">
              <header className="flex justify-between items-center border-b border-borderColor_primary py-2 px-4">
                <h2 className="text-xl font-semibold">Summary</h2>
                <div className="flex space-x-4">
                  <button onClick={handleDownload}>
                    <img
                      src={require("../assets/svgs/download.svg").default}
                      alt="Download"
                      className="w-6 h-6 active:opacity-40"
                    />
                  </button>
                  <button onClick={handleCopy}>
                    <img
                      src={require("../assets/svgs/copy-icon.svg").default}
                      alt="Copy"
                      className="w-5 h-5 active:opacity-50"
                    />
                  </button>
                </div>
              </header>
            </div>
          </div>
        </section>
      </main>

      <main className="mt-20">
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-message to-backgroundDull text-textColor_primary py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-3xl font-bold mb-6">
                  Transform Text into Knowledge
                </h1>
                <p className="text-xl mb-8 px-10">
                  Your all-in-one platform for PDF summarization, audio
                  conversion, and premium ebook access.
                </p>
                <a
                  href="/"
                  className="bg-borderColor_secondary hover:bg-backgroundDull border border-borderColor_primary text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20">
            <div className="">
              <h2 className="text-3xl font-bold text-center mb-16">
                Powerful Features for Everyone
              </h2>
              <div className="flex flex-col gap-y-10 items-center">
                <FeatureCard
                  icon={<FileText className="w-8 h-8 text-textColor_primary" />}
                  title="Smart PDF Processing"
                  description="Upload any PDF and get instant, accurate text extraction with advanced OCR technology."
                />
                <FeatureCard
                  icon={<Brain className="w-8 h-8 text-textColor_primary" />}
                  title="AI-Powered Summaries"
                  description="Get concise, meaningful summaries powered by GROQ's advanced AI technology."
                />
                <FeatureCard
                  icon={
                    <Headphones className="w-8 h-8 text-textColor_primary" />
                  }
                  title="Audio Conversion"
                  description="Convert summaries to natural-sounding audio for accessibility and convenience."
                />
              </div>
            </div>
          </section>

          {/* Premium Library Section */}
          <section className="bg-backgroundDull py-20">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <h2 className="text-3xl font-bold mb-6">
                    Premium eBook Library
                  </h2>
                  <p className="text-textColor_secondary mb-8">
                    Access thousands of premium ebooks on-demand. Rent
                    bestsellers, academic texts, and professional resources at
                    competitive prices.
                  </p>
                  <div className="flex items-center space-x-4">
                    <BookMarked className="w-6 h-6 text-textColor_primary" />
                    <span>Over 10,000 curated titles</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-4">
                    <Crown className="w-6 h-6 text-textColor_primary" />
                    <span>Exclusive academic and professional content</span>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Library collection"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-16">
                Perfect For Every Reader
              </h2>
              <div className="flex flex-col gap-y-10 items-center">
                <UseCaseCard
                  title="Students & Researchers"
                  description="Quickly digest academic papers and research documents. Convert summaries to audio for efficient learning on-the-go."
                  image="https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <UseCaseCard
                  title="Professionals"
                  description="Stay updated with industry reports and technical documentation. Save time with concise summaries of lengthy documents."
                  image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <UseCaseCard
                  title="Visually Impaired"
                  description="Access written content through high-quality audio conversion. Enjoy literature and professional content without barriers."
                  image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                />
              </div>
            </div>
          </section>

          {/* CTA Section */}
          {!true && (
            <section className="bg-backgroundDull text-textColor_primary py-16">
              <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Transform Your Reading Experience?
                </h2>
                <p className="mb-8">
                  Join thousands of users who are already benefiting from our
                  smart document processing.
                </p>
                <a
                  href="/register"
                  className="bg-borderColor_secondary hover:bg-backgroundDull border border-borderColor_primary text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Signup
                </a>
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
