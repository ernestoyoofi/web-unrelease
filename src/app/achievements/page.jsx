import { achievements } from "../../../static-all";
import Achievement from "./Achievement"

export default function AchievementsPage() {
  return <>
    <Achievement data={achievements}/>
  </>
}