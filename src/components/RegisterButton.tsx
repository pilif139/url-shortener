import RegisterButtonText from "@/components/RegisterButtonText";

export default function RegisterButton(){
  return (
      <div className="top-0 right-0 flex w-full justify-center bg-slate-300 px-10 py-3 text-2xl font-bold text-black transition hover:text-gray-600 dark:bg-slate-600 dark:text-white md:absolute md:w-fit md:bg-transparent dark:hover:text-gray-200 dark:md:bg-transparent">
        <RegisterButtonText/>
      </div>
  )
}