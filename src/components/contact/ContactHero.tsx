"use client";

export function ContactHero() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
        <p className="text-xl opacity-90 mb-4">
          我们期待听到您的声音
        </p>
        <p className="text-lg opacity-80">
          无论是产品反馈、功能建议，还是技术交流，都欢迎与我们联系
        </p>
      </div>
    </section>
  );
}
