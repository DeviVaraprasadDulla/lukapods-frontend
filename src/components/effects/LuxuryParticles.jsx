import { useCallback } from "react";

import Particles from "@tsparticles/react";

import { loadSlim } from "tsparticles-slim";

const LuxuryParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="luxuryParticles"
      init={particlesInit}
      className="absolute inset-0 z-10"
      options={{
        fullScreen: false,

        background: {
          color: "transparent",
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: ["#38bdf8", "#67e8f9", "#ffffff"],
          },

          shape: {
            type: "circle",
          },

          opacity: {
            value: 0.7,
            random: true,
          },

          size: {
            value: { min: 2, max: 5 },
          },

          move: {
            enable: true,

            speed: 2,

            direction: "top",

            random: true,

            straight: false,

            outModes: {
              default: "out",
            },
          },

          links: {
            enable: false,
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },

          modes: {
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default LuxuryParticles;
