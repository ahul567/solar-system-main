import AuraGreen from '../../assets/AuraGreen.svg';
import GridiconsGlobe from './Assets/gridicons_globe.svg';
import GrommetIconsMap from './Assets/grommet-icons_map.svg';
import IconoirChatBubble from './Assets/iconoir_chat-bubble.svg';
import MdiTurbine from './Assets/mdi_turbine.svg';
import MingcuteInboxLine from './Assets/mingcute_inbox-line.svg';
import OuiVisGauge from './Assets/oui_vis-gauge.svg';
import ProiconsCall from './Assets/proicons_call.svg';
import RiBarChart2Fill from './Assets/ri_bar-chart-2-fill.svg';

const Sidebardata = {
  auragreen_data: [
    { image: AuraGreen }
  ],

  powered_data: [
    { image: GridiconsGlobe, caption: "Windfarm Overview" },
    { image: MdiTurbine, caption: "Turbine Overview" },
    { image: OuiVisGauge, caption: "Wind Speed" },
    { image: RiBarChart2Fill, caption: "Production" },
    { image: GrommetIconsMap, caption: "Site Map" }
  ],

  called_data: [
    { image: ProiconsCall, caption: "Contact-us" },
    { image: MingcuteInboxLine, caption: "Inbox" },
    { image: IconoirChatBubble, caption: "Feedback" }
  ]
};

export default Sidebardata;
