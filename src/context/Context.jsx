import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    // Typing effect
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 40 * index); // faster & smoother
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setResultData("");
        setInput("");
    };

    const onSent = async (prompt) => {
        try {
            //  prevent empty input
            const finalPrompt = prompt !== undefined ? prompt : input;
            if (!finalPrompt || finalPrompt.trim() === "") return;

            setResultData("");
            setLoading(true);
            setShowResult(true);

            let response;

            if (prompt !== undefined) {
                response = await runChat(prompt);
                setRecentPrompt(prompt);
            } else {
                setPrevPrompts(prev => [...prev, input]);
                setRecentPrompt(input);
                response = await runChat(input);
            }

            //  safety check
            if (!response) {
                setResultData("No response from AI");
                return;
            }

            // formatting response
            let responseArray = response.split("**");
            let newResponse = "";

            for (let i = 0; i < responseArray.length; i++) {
                if (i % 2 === 1) {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                } else {
                    newResponse += responseArray[i];
                }
            }

            // replace * with line breaks
            let formatted = newResponse.split("*").join("<br/>");

            // typing animation
            let words = formatted.split(" ");
            for (let i = 0; i < words.length; i++) {
                delayPara(i, words[i] + " ");
            }

        } catch (error) {
            console.error("ERROR:", error);
            setResultData("⚠️ Something went wrong. Check console.");
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;