'use client'

import Form, {FormInput} from "@/components/Form";
import {useEffect, useRef, useState} from "react";
import ShortenedLink from "@/components/ShortenedLink";
import {RiseLoader} from "react-spinners";
import {addUrl} from "@/actions/actions";
import {z} from "zod";

const urlSchema = z.object({
    url: z.string()
        .url({message: "Invalid URL!"}),
    alias: z.string()
        .max(20, {message: "To long alias!"})
        .optional()
})

export default function Home() {
    const [alias, setAlias] = useState<string | undefined>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [spinnerTheme, setSpinnerTheme] = useState<"black" | "white">("black");
    const urlRef = useRef<HTMLInputElement>(null);
    const aliasRef = useRef<HTMLInputElement>(null);

    const [urlError, setUrlError] = useState<string | null>("");
    const [aliasError, setAliasError] = useState<string | null>("");

    const inputs = [
        {
            placeholder: "Enter your url here...",
            type: "text",
            name: "url",
            ref: urlRef,
            animation: {
                initial: {opacity: 0, x: -200},
                animate: {opacity: 1, x: 0},
                transition: {duration: 0.2, type: "tween", stiffness: 500, damping: 20},
            },
            error: urlError,
            setError: setUrlError,
        },
        {
            placeholder: "Your optional alias...",
            type: "text",
            name: "alias",
            ref: aliasRef,
            animation: {
                initial: {opacity: 0, x: 200},
                animate: {opacity: 1, x: 0},
                transition: {duration: 0.2, type: "tween", stiffness: 500, damping: 20},
            },
            error: aliasError,
            setError: setAliasError,
        }
    ] as FormInput[];

    const theme = window.localStorage.getItem("theme");
    useEffect(() => {
        setSpinnerTheme(theme === "dark" ? "white" : "black");
    }, [theme]);

    const action = async (formData: FormData) => {
        const newUrl = {
            url: formData.get("url") as string,
            alias: formData.get("alias") as string
        }

        const result = urlSchema.safeParse(newUrl);
        if (!result.success) {
            setUrlError(result.error.errors[0].message);
            setAlias(undefined)
            if (result.error.errors[1]) {
                setAliasError(result.error.errors[1].message);
            }
            setIsLoading(false);
            return;
        }

        // code when the zod validation passes
        const response = await addUrl(formData)
        setAlias(response.alias)
        if (response.error) {
            setAliasError(response.error)
        } else {
            setUrlError("");
            setAliasError("");
            if (urlRef.current && aliasRef.current) {
                urlRef.current.value = "";
                aliasRef.current.value = "";
            }
        }
        setIsLoading(false);
    }

    return (
        <main className="flex flex-col items-center justify-center text-2xl">
            <Form action={action} inputs={inputs} setIsLoading={setIsLoading}></Form>
            {!isLoading && alias && <ShortenedLink alias={alias}/>}
            <RiseLoader loading={isLoading} size={20} className="mt-20" color={spinnerTheme}/>
        </main>
    );
}
