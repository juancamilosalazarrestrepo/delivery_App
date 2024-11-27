

const pallete = [
  {
    //orange
    text:'#f97316',
    bgColor: (opacity) => `rgba(251, 146, 60, ${opacity})`,
  },
  {
    //yellow
    text:'#facc15',
    bgColor: (opacity) => `rgba(250, 204, 21, ${opacity})`,
  },
  {
    //green
    text:'#22c55e',
    bgColor: (opacity) => `rgba(34, 197, 94, ${opacity})`,
  },
  {
    //blue
    text:'#3b82f6',
    bgColor: (opacity) => `rgba(59, 130, 246, ${opacity})`,
  },
  {
    //purple
    text:'#a855f7',
    bgColor: (opacity) => `rgba(168, 85, 247, ${opacity})`,
  },
  {
    //pink
    text:'#ec4899',
    bgColor: (opacity) => `rgba(236, 72, 153, ${opacity})`,
  },
  {
    //red
    text:'#ef4444',
    bgColor: (opacity) => `rgba(239, 68, 68, ${opacity})`,
  },
  {
    //gray
    text:'#6b7280',
    bgColor: (opacity) => `rgba(107, 114, 128, ${opacity})`,
  },
]




export const themeColors = {
  ...pallete[6]
};
