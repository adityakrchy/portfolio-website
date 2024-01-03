import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Aditya Kumar Choudhary</GradientText> 👋
        </>
      }
      description={
        <>
          A web and android developer, based in Bihar, India. Passionate about
          solving{' '}
          <span className="text-cyan-400 hover:underline">
            real world problems
          </span>{' '}
          and enhancing{' '}
          <span className="text-cyan-400 hover:underline">user experience</span>
          . My real passion is to{' '}
          <span className="text-cyan-400 hover:underline">
            convert ideas into code.
          </span>{' '}
          In the mean time, I am also a{' '}
          <span className="text-cyan-400 hover:underline">
            part time gamer.
          </span>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/adityakrchy1011" target="_blank">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-kumar-choudhary/"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
