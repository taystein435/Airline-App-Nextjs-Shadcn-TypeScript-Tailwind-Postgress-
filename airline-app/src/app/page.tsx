import Catchy from "@/components/shared/Catchy";
import { Header } from "@/components/shared/Header";
import { Package } from "@/components/shared/Package";
import { Search } from "@/components/shared/Search";
import AttractionWrapper from "@/components/shared/AttractionWrapper";


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col">
      <Search />
      <Header />
      <Catchy />
      <AttractionWrapper/>
        <Package />
    </main>
  );
}
