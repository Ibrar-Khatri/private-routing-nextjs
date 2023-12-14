import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", maxWidth: 200 }}>
        <Link href={"/dashboard"}>Dashboard</Link>
        <br />
        <Link href={"/dashboard/home"}>Home</Link>
        <br />
        <Link href={"/dashboard/notifications"}>Notifications</Link>
        <br />
        <Link href={"/dashboard/settings"}>Settings</Link>
        <br />
      </div>
      <div>{children}</div>
    </div>
  );
};

const styles = {};
export default DashboardLayout;
