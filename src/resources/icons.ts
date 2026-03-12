import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";
import {
  
  SiTerraform,
  SiAmazon,           // General AWS & CloudFormation
  SiAmazons3,
  SiAmazonec2,
  SiAmazonroute53,
  SiAmazoniam,
  SiAmazoncloudwatch, // Use for CloudTrail / GuardDuty (Monitoring)
} from "react-icons/si";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import { 
  SiPython, 
  SiDocker, 
  SiKubernetes, 
  SiLinux, 
  SiDiagramsdotnet 
} from "react-icons/si";

import { VscTerminalBash } from "react-icons/vsc";
import { HiOutlineCube } from "react-icons/hi2";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
} from "react-icons/si";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads, FaInstagram, FaXTwitter, FaFacebook, FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";

export const iconLibrary: Record<string, IconType> = {
 terraform: SiTerraform,
  aws: SiAmazon,
  s3: SiAmazons3,
  ec2: SiAmazonec2,
  route53: SiAmazonroute53,
  iam: SiAmazoniam,
  cloudwatch: SiAmazoncloudwatch,
  cloudformation: SiAmazon, // Maps to the general AWS logo
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  python: SiPython,
  bash: VscTerminalBash,
  linux: SiLinux,
  // Containerization & Orchestration
  docker: SiDocker,
  kubernetes: SiKubernetes,
  optimization: HiOutlineCube,
  microservices: SiDiagramsdotnet, // Good representation for architecture
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
