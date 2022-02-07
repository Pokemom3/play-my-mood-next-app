import Head from "next/head";
import NavBar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Link from "next/link";
import Slogan from "../components/slogan";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Slogan />
      <h1>Home: Lets Get Started</h1>
      <a href="/api/auth/login">Login</a>

      {/* <Link href="/mood"></Link> */}
      <Footer />
    </div>
  );
}
