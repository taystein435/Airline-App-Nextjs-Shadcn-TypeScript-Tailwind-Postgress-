import { Attraction } from "@/components/shared/Attraction";
import Catchy from "@/components/shared/Catchy";
import { Header } from "@/components/shared/Header";
import { Package } from "@/components/shared/Package";
import { Search } from "@/components/shared/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
  <Search/>
  <Header/>
  <Catchy/>
  <Attraction/>
  <Package/>
    </main>
  );
}
