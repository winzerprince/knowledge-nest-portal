
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md px-4">
          <h1 className="text-7xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We couldn't find the page you're looking for.
          </p>
          <Link
            to="/"
            className="btn btn-primary px-6 py-3"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
