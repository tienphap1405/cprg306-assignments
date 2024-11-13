import Link from 'next/link';

export default function Page() {
  return(
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p><Link href={"/week-2"}>Link to week-2 page</Link></p>
      <p><Link href={"/week-3"}>Link to week-3 page</Link></p>
      <p><Link href={"/week-4"}>Link to week-4 page</Link></p>
      <p><Link href={"/week-5"}>Link to week-5 page</Link></p>
      <p><Link href={"/week-6"}>Link to week-6 page</Link></p>
      <p><Link href={"/week-7"}>Link to week-7 page</Link></p>
      <p><Link href={"/week-8"}>Link to week-8 page</Link></p>
      <p><Link href={"/week-9"}>Link to week-9 page</Link></p>


    </div>
  );
}