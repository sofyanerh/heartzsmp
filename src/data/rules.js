export const rules = [
  {
    id: "general-conduct",
    title: "General Conduct",
    type: "numbered",
    items: [
      "Do not share personal or sensitive information (yours or others') in public chat.",
      "All content must remain safe-for-work. This includes usernames, skins, builds, item names, books, and any player-created content.",
      "Staff decisions must be respected at all times. If you disagree with a punishment or action, use the proper appeal system instead of arguing in chat or harassing staff.",
      "Punishment evasion (using alts or other methods to bypass bans, mutes, or restrictions) is strictly forbidden.",
      "Advertising other servers, Discords, or external communities is not allowed unless explicitly approved by staff."
    ]
  },

  {
    id: "chat-rules",
    title: "Chat Rules",
    type: "mixed",
    items: [
      "Hate speech, slurs, discrimination, or targeted harassment of any kind is not allowed.",
      "Communication must remain respectful in all forms (chat, whispers, signs, books, etc.). Toxicity, insults, or harassment are not tolerated.",

      {
        type: "section",
        title: "Foreign Languages in Main Chat",
        content:
          "To keep communication clear and inclusive, English should be used in main chat. This ensures moderation is consistent and all players can participate in public conversations.",

        allowed: [
          "In private messages or group/team chats.",
          "Occasionally in main chat for short phrases or greetings, as long as it does not disrupt conversation."
        ],

        disallowed: [
          "Extended conversations in main chat using another language.",
          "Using language barriers to bypass rules or hide inappropriate content.",
          "Spamming or excessive repetition in any language."
        ]
      },

      "Wishing harm or ill intent toward other players is strictly prohibited. This includes, but is not limited to: Death wishes, encouraging physical harm, wishing illness or serious misfortune, expressing hope that another player dies or suffers harm.",

      "Sharing or spreading disturbing, triggering, or excessively negative content is not allowed.",
      "Spam, flooding, or repetitive messaging is not allowed.",
      "Attempting to bypass chat filters using symbols, spacing tricks, or altered spelling is forbidden.",
      "All written content must remain readable. Unreadable stylized fonts or formats are not allowed.",
      "Punishments (your own or others') must not be discussed in public chat.",
      "Political and religious discussions are not allowed in public spaces. Limited respectful discussion may be allowed at staff discretion."
    ]
  },

  {
    id: "griefing-stealing",
    title: "Griefing & Stealing",
    type: "expanded",
    description:
      "Destroying, modifying, or taking anything that does not belong to you is strictly prohibited.",
    details: [
      "This includes block removal, item theft, container access, or altering builds without permission.",
      "Even minor theft or \"harmless trolling\" is considered griefing.",
      "All areas are protected by server rules regardless of land claims or protection systems."
    ]
  },

  {
    id: "land-protection",
    title: "Land Protection / Claims",
    type: "expanded",
    description:
      "Players are responsible for securing their own builds using the claiming system.",
    details: [
      "Unclaimed structures are not guaranteed protection or restoration.",
      "Players must ensure their builds are properly claimed to avoid loss or damage.",
      "Claims are used to define ownership clearly and prevent disputes."
    ]
  },

  {
    id: "alts",
    title: "Alternate Accounts (Alts)",
    type: "expanded",
    description:
      "Alternate accounts must not be used to gain unfair advantages.",
    details: [
      "Using multiple accounts for rewards, storage abuse, or economy exploitation is not allowed.",
      "AFK usage is permitted only if it does not provide unfair benefits or exploit mechanics."
    ]
  },

  {
    id: "pvp",
    title: "Player versus Player (PvP)",
    type: "expanded",
    description: "PvP must always be consensual.",
    details: [
      "Players may not attack, kill, or trap others without clear agreement.",
      "Any form of forced PvP is considered invalid."
    ]
  },

  {
    id: "build-content",
    title: "Build Content Restrictions",
    type: "expanded",
    description: "Builds must remain appropriate and respectful.",
    details: [
      "Political or propaganda-style builds are not allowed.",
      "Religious builds are allowed only if they remain respectful and non-provocative."
    ]
  },

  {
    id: "world-maintenance",
    title: "World Maintenance",
    type: "expanded",
    description: "The world must remain clean and visually organized.",
    details: [
      "Players are expected to remove unfinished or abandoned structures when possible.",
      "Floating blocks, leftover scaffolding, and random pillars are not allowed."
    ]
  },

  {
    id: "build-spacing",
    title: "Build Spacing & World Integrity",
    type: "expanded",
    description:
      "Builds must be placed in a way that maintains a clean and organized world.",
    details: [
      "Players should avoid overcrowding and respect reasonable distance between separate builds.",
      "Structures should not overlap or interfere with other players' builds without permission.",
      "Random or scattered constructions that degrade world quality are not allowed."
    ]
  },

  {
    id: "map-art",
    title: "Map Art",
    type: "expanded",
    description: "Map art is restricted to approved locations only.",
    details: [
      "Must be constructed in designated or ocean areas.",
      "Once completed, map art must be converted into a locked map item.",
      "Large unfinished structures must be removed afterward."
    ]
  },

  {
    id: "farms",
    title: "Farms & Performance",
    type: "expanded",
    description:
      "Farms are allowed only if they do not negatively affect server performance.",
    details: [
      "Any build causing lag, excessive entities, or performance issues may be modified or removed.",
      "Redstone or entity-heavy systems must remain optimized and reasonable."
    ]
  },

  {
    id: "economy",
    title: "Trading & Economy",
    type: "expanded",
    description:
      "All trades, shops, and agreements must be fair, transparent, and honest.",
    details: [
      "Scamming, misleading trades, or fake shops are not allowed.",
      "This includes fake items, false claims, or failing to deliver agreed exchanges.",
      "Players may not deceive others about items, enchantments, prices, services, or rewards.",
      "All transactions and agreements must be fulfilled as promised."
    ]
  },

  {
    id: "exploits",
    title: "Exploits & Unauthorized Modifications",
    type: "expanded",
    description:
      "Any form of cheating or exploitation is strictly forbidden.",
    details: [
      "Hacked clients, duplication glitches, X-ray, auto-clickers, fly hacks, and similar tools are banned.",
      "Abuse of bugs or mechanics to gain advantage is not allowed.",
      "Intentional lag machines or performance abuse will result in severe punishment."
    ]
  },

  {
    id: "mods",
    title: "Mods & Clients",
    type: "expanded",
    description: "Only approved modifications are allowed.",
    details: [
      "Any mod affecting gameplay advantage must be verified by staff.",
      "If unsure, players must request clarification before using it."
    ]
  },

  {
    id: "impersonation",
    title: "Impersonation",
    type: "expanded",
    description:
      "Impersonating staff or other individuals is strictly prohibited.",
    details: [
      "This includes usernames, skins, nicknames, or behavior intended to mimic staff or known players.",
      "Faking authority, permissions, or rank status is not allowed.",
      "Manipulated screenshots or fake evidence are also prohibited."
    ]
  },

  {
    id: "gambling",
    title: "Gambling",
    type: "expanded",
    description:
      "Gambling systems or chance-based reward mechanics are not allowed.",
    details: [
      "Slot machines, loot-based pay-to-win systems, or randomized paid rewards are forbidden.",
      "Any system where players pay or contribute for a chance-based outcome is forbidden."
    ]
  },

  {
    id: "trapping",
    title: "Trapping",
    type: "expanded",
    description:
      "Trapping players without their consent is not allowed and is considered a form of non-consensual griefing.",
    details: [
      "Teleport traps, hidden kill setups, suffocation traps, lava traps, or fake offers designed to kill players."
    ]
  },

  {
    id: "real-world-threats",
    title: "Real-World Threats",
    type: "expanded",
    description:
      "Any threats involving real-world harm or illegal activity are strictly forbidden.",
    details: [
      "DDoS threats, doxxing (sharing personal information), or SWAT-style threats.",
      "Even jokes about such actions are taken seriously.",
      "These actions are illegal and will result in severe punishment."
    ]
  }
];