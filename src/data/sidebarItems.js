export const sidebarItems = [


  {
    section: "Rules & Info",
    items: [
      { label: "Rules", path: "/rules", icon: "⤿" },
      { label: "FAQ", path: "/faq", icon: "⤿" }
    ]
  },

  {
    section: "Allowed / Not Allowed",
    items: [
      { label: "Farms & Mods", path: "/farms-mods", icon: "⤿" }
    ]
  },

  {
    section: "Applications",
    items: [
      { label: "Staff Apply", path: "/staff-apply", icon: "⤿" }
    ]
  },
  {
  section: "Getting Started",
  items: [
    { label: "How to Join", path: "/how-to-join", icon: "⤿" },

    {
      label: "About Server",
      icon: "⤿",
      children: [
        { label: "Overview", path: "/about/overview" },
        { label: "Economy", path: "/about/economy" },
        { label: "PvP", path: "/about/pvp" },
        { label: "Claims", path: "/about/claims" },
        { label: "Events", path: "/about/events" }
      ]
    }
  ]
}
];


