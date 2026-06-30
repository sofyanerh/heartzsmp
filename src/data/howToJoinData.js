export const howToJoinData = {
  serverInfo: {
    ip: "play.heartzsmp.com",
    port: "",
    version: "Java & Bedrock supported 26.1.2",
  },

  javaSteps: [
    "Open Minecraft (Java Edition)",
    "Click Multiplayer",
    "Click Add Server",
    "Enter the server IP listed above",
    "Click Done",
    "Select the server and click Join Server",
  ],

  bedrockSteps: [
    "Open Minecraft (Bedrock Edition)",
    "Go to Play",
    "Open the Servers tab",
    "Click Add Server",
    "Enter the server IP",
    "Enter the port if required",
    "Save and join the server",
  ],

  firstTimeSetup: [
    "Make sure your game version is compatible (26.1.2 is recommended)",
    "No mods or special clients are required unless stated otherwise",
    "Resource packs will be prompted automatically if needed",
  ],

  commonIssues: [
    {
      title: "Can’t connect to the server?",
      solution:
        "Check that your game version matches the supported version.",
    },
    {
      title: "Bedrock players can’t join?",
      solution: "Make sure the correct IP and port are used.",
    },
    {
      title: "Connection timed out?",
      solution:
        "The server may be restarting or temporarily offline.",
    },
    {
      title: "Lag or performance issues?",
      solution:
        "Try disabling shaders or heavy resource packs.",
    },
    {
      title: "Still having issues?",
      solution: "Ask for help in the Discord support section.",
    },
  ],

  links: {
    discord: "https://discord.gg/YFGdkykee4",
    rules: "/rules",
    faq: "/faq",
    staff: "/staff-apply",
  },
};