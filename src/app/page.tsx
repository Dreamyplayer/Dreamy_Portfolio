import DarkModeSwitch from "@/ui/DarkMode";

export default function Home() {
  return (
    <main className='mt-10 h-auto'>
      <div className='flex items-center justify-between'>
        <h2 className={`ml-10 text-4xl font-semibold`}>Dreamy.</h2>
        <DarkModeSwitch />
      </div>
    </main>
  );
}
