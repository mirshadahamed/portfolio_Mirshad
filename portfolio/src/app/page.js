export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold">MyTailwindApp</div>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a
            href="#"
            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Build faster with Tailwind CSS
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A minimal Next.js + Tailwind starter with a simple, clean layout you can extend.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#"
                className="rounded-md bg-blue-600 px-5 py-2.5 text-white shadow-sm hover:bg-blue-500"
              >
                Try it now
              </a>
              <a
                href="#features"
                className="rounded-md border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-100"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="pb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-600">1</div>
              <h3 className="text-lg font-semibold">Ready to use</h3>
              <p className="mt-2 text-sm text-gray-600">
                Tailwind is configured and working. Start composing interfaces with utility classes.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-600">2</div>
              <h3 className="text-lg font-semibold">Responsive by default</h3>
              <p className="mt-2 text-sm text-gray-600">
                Use responsive modifiers like <code>sm:</code>, <code>md:</code>, <code>lg:</code> to adapt layouts.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-600">3</div>
              <h3 className="text-lg font-semibold">Customizable</h3>
              <p className="mt-2 text-sm text-gray-600">
                Extend the design system in <code>tailwind.config.js</code> to match your brand.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} MyTailwindApp</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-600">Privacy</a>
            <a href="#" className="hover:text-blue-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
