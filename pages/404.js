import Link from "next/link";

export default function PageNotFound(props) {
  return (
    <div className="PageNotFound">
      <h1>Page or City not found.</h1>
      <Link href={"/"}>
        <button className="btn btn-warning">Go to home page?</button>
      </Link>
    </div>
  );
}
