import Container from "@/copmonents/container";
import Pagination from "@/copmonents/pagination";
import Productitem from "@/copmonents/productitem";
import Search from "@/copmonents/search";
import axios from "axios";
import Link from "next/link";

export interface TProduuct {
  id: string;
  title: string;
  image: string;
  price: number;
}

export interface TPaginationProduct {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number ;
  prev: number | null;
  data : TProduuct[]
}

interface TStoreProps {
  params : Promise<{}>;
  searchParams : Promise<{page : number , per_page : number , title : string}>
}

async function Store({params,searchParams} : TStoreProps) {

  const page = (await searchParams).page ?? 1
  const per_page = (await searchParams).per_page ?? 4
  const title = (await searchParams).title ?? ""

  const { data } = await axios<TPaginationProduct>(`http://localhost:3001/products?_page=${page}&_per_page=${per_page}&title=${title}`);

  return (
    <>
      <Container>
        <Search/>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-6">
            {data.data.map((item: TProduuct) => (
              <Link href={`/store/${item.id}`} key={item.id}>
                <Productitem {...item} />
              </Link>
            ))}
        </div>
        <Pagination pageCount={data.pages}/>
      </Container>
    </>
  );
}

export default Store;
