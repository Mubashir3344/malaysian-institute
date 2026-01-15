import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GraduationCap, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const StudentPortal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <section className="min-h-[80vh] flex items-center justify-center py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-muted-foreground" />
                </div>
                
                <h1 className="text-3xl md:text-4xl font-serif leading-tight mb-4">
                  Student Portal
                </h1>
                <p className="text-muted-foreground">
                  Access your enrolled courses, assignments, and certifications.
                </p>
              </div>

              <div className="bg-background border border-border p-8">
                <h2 className="text-lg font-serif mb-6 text-center">Enrolled Fellows Login</h2>
                
                {error && (
                  <div className="bg-destructive/10 border border-destructive/20 p-4 mb-6 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-destructive">Invalid Credentials</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        The email or password you entered is incorrect. Please try again or contact the registrar.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="fellow@institution.edu"
                      required
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="border-border"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Forgot your password?{" "}
                    <a href="mailto:dean@srec-edu.org" className="text-foreground hover:underline">
                      Contact the Dean's Office
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Not yet enrolled? Explore our certification programs.
                </p>
                <Button asChild variant="outline" className="border-foreground">
                  <Link to="/programs">
                    View Programs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-serif mb-12 text-center">
                Enrolled Fellow <em className="italic">Benefits</em>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background p-8 border border-border">
                  <h3 className="text-lg font-serif mb-3">Course Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    Access comprehensive course content, lecture recordings, 
                    and supplementary reading materials.
                  </p>
                </div>
                <div className="bg-background p-8 border border-border">
                  <h3 className="text-lg font-serif mb-3">Graded Assignments</h3>
                  <p className="text-sm text-muted-foreground">
                    Submit assignments, receive feedback from instructors, 
                    and track your progress throughout the program.
                  </p>
                </div>
                <div className="bg-background p-8 border border-border">
                  <h3 className="text-lg font-serif mb-3">Certification Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor your certification progress and download 
                    official credentials upon course completion.
                  </p>
                </div>
                <div className="bg-background p-8 border border-border">
                  <h3 className="text-lg font-serif mb-3">Community Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with fellow researchers and ethics professionals 
                    through our exclusive discussion forums.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudentPortal;
