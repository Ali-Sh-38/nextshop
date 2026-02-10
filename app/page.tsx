import Container from "@/copmonents/container"

export default function Home() {
  return (
    <>
    <Container>
      <h1 className='text-2xl mb-4 font-semibold'>خانه</h1>
      <p className="font-semibold border-b-4 border-blue-700 w-max p-2">
        به فروشگاه ساخته شده توسط next.js خوش آمدید
      </p>
    </Container>
    </>
  );
}

// GET /posts?_page=1&_per_page=25