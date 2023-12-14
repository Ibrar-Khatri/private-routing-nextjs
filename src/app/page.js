import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:'100%'
      }}
    >
      <h1>Landing Page</h1>
    </div>
  );
}
