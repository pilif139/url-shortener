import { SetStateAction, Dispatch, RefObject} from "react";
import {motion} from "framer-motion";

type inputType =
    "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "range"
    | "url"
    | "search"
    | "date"
    | "time"
    | "datetime-local"
    | "month"
    | "week"
    | "color"

const defaultAnimation = {
    initial: { opacity: 0, x: 0 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.2, type: "tween", stiffness: 500, damping: 20 }
};

export type FormInput = {
        label?: string,
        placeholder?: string,
        type: inputType,
        name: string,
        ref?: RefObject<HTMLInputElement>,
        className?: string,
        animation?: {
            initial?: { opacity: number, x: number },
            animate?: { opacity: number, x: number },
            transition?: { duration: number, type: string, stiffness: number, damping: number }
        },
    }
    & ({ label: string } | { placeholder: string })
    & ({
    error?: string | null
    setError?: Dispatch<SetStateAction<string | null>>
})

type FormProps = {
    inputs: FormInput[],
    action: (formData: FormData) => void,
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

export default function Form({inputs, action, setIsLoading}: FormProps) {
    return (
        <form action={action} className="flex flex-col items-center gap-5">
            {
                inputs.map(({label, placeholder, type, name, ref, className, animation = defaultAnimation, error }) => (
                    <>
                        <motion.div
                            key={name}
                            initial={animation?.initial}
                            animate={animation?.animate}
                            transition={animation?.transition}
                            className="flex flex-col items-center gap-1">
                            {label && <label htmlFor={name}>{label}</label>}
                            <input
                                ref={ref}
                                type={type}
                                name={name}
                                id={name}
                                placeholder={placeholder}
                                className={`${className} rounded-2xl p-2 outline-none transition w-[15em] focus:bg-slate-100 dark:placeholder:text-slate-800 dark:bg-slate-400 dark:text-black md:w-[30em] dark:focus:bg-slate-300 ${error ? "border-red-500" : ""}`}
                            />
                        </motion.div>
                        {error && <p className="text-red-500">{error}</p>}
                    </>
                ))
            }
            <motion.button
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.4, type: "tween", stiffness: 500, damping: 20}}
                type="submit"
                onClick={() => setIsLoading(true)}
                className="mx-4 w-max rounded-2xl bg-violet-500 p-2 px-8 text-white transition hover:bg-violet-600">Submit
            </motion.button>
        </form>
    )
}