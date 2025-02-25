"use client";

interface HeroProps {
  teamName: string;
  slogan: string;
}

export const Hero = ({ teamName, slogan }: HeroProps) => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
        <p className="text-xl opacity-90 mb-4">
          {teamName}
        </p>
        <p className="text-lg opacity-80 mb-4">
          {slogan}
        </p>
        <div className="mt-8 text-lg opacity-90">
          <p className="mb-2">🌱 专注于健康科技创新</p>
          <p className="mb-2">💡 追求卓越的技术团队</p>
          <p>🤝 为用户创造价值</p>
        </div>
      </div>
    </section>
  );
};
