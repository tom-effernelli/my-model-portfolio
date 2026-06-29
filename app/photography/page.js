"use client";
import MediaGrid from "../../components/media-grid";
import TopBar from "../../components/top-bar";

const CLOUD = "https://res.cloudinary.com/dixdfunwk/image/upload";

// Shooting 002 — staggered 3-col portrait grid, all columns end at row 28.
const shooting2tiles = [
  // Band 1 — tile carré (cols 1-2) + portrait (col 3)
  { area: "1 / 1 / 7 / 3",  img: `${CLOUD}/A7400401_-_P_-_version2_kifktz.jpg`, pos: "center", label: "(01) SHOOTING 002 — 01" },
  { area: "1 / 3 / 7 / 4",  img: `${CLOUD}/A7400339_-_P_-_y2k_g4ngji.jpg`,      pos: "center", label: "(02) SHOOTING 002 — 02" },
  // Band 2 — 3 portraits égaux
  { area: "7 / 1 / 13 / 2", img: `${CLOUD}/A7400492_-_P_pgbkrf.jpg`,             pos: "center", label: "(03) SHOOTING 002 — 03" },
  { area: "7 / 2 / 13 / 3", img: `${CLOUD}/A7400567_-_P_hb6sye.jpg`,             pos: "center", label: "(04) SHOOTING 002 — 04" },
  { area: "7 / 3 / 13 / 4", img: `${CLOUD}/A7400339_-_P_-_Neutre_kave3x.jpg`,   pos: "center", label: "(05) SHOOTING 002 — 05" },
  // Band 3 — portrait (col 1) + tile carré (cols 2-3)
  { area: "13 / 1 / 19 / 2",img: `${CLOUD}/A7400401_-_P_-_Neutre_qsaf21.jpg`,   pos: "center", label: "(06) SHOOTING 002 — 06" },
  { area: "13 / 2 / 19 / 4",img: `${CLOUD}/A7400401_-_P_fypnwo.jpg`,             pos: "center", label: "(07) SHOOTING 002 — 07" },
  // Band 4 — 3 portraits égaux
  { area: "19 / 1 / 25 / 2",img: `${CLOUD}/A7400450_-_P_qqytxz.jpg`,             pos: "center", label: "(08) SHOOTING 002 — 08" },
  { area: "19 / 2 / 23 / 3",img: `${CLOUD}/A7400553_-_P_rhe8rl.jpg`,             pos: "center", label: "(09) SHOOTING 002 — 09" },
  { area: "19 / 3 / 25 / 4",img: `${CLOUD}/A7400607_-_P_ayh8pu.jpg`,             pos: "center", label: "(10) SHOOTING 002 — 10" },
  // Band 5 — 3 portraits (légèrement moins hauts)
  { area: "25 / 1 / 30 / 2",img: `${CLOUD}/A7400646_-_P_jeyw8q.jpg`,             pos: "center", label: "(11) SHOOTING 002 — 11" },
  { area: "23 / 2 / 30 / 3",img: `${CLOUD}/A7400763_-_P_wwiend.jpg`,             pos: "center", label: "(12) SHOOTING 002 — 12" },
  { area: "25 / 3 / 30 / 4",img: `${CLOUD}/A7400779_-_P_bezhiw.jpg`,             pos: "center", label: "(13) SHOOTING 002 — 13" },
];

// Shooting 001 — same principle, adjust area values freely.
const shooting1tiles = [
  { area: "1 / 1 / 8 / 2",  img: `${CLOUD}/v1782413583/A7400036_-_P_jy9kpi.jpg`, pos: "center",     label: "(01) SHOOTING 001 — 01" },
  { area: "1 / 2 / 5 / 3",  img: `${CLOUD}/A7400043_-_P_gvna5s.jpg`,              pos: "center",     label: "(02) SHOOTING 001 — 02" },
  { area: "1 / 3 / 6 / 4",  img: `${CLOUD}/A7400042_-_P_y2qkv5.jpg`,              pos: "center",     label: "(03) SHOOTING 001 — 03" },
  { area: "5 / 2 / 8 / 3",  img: `${CLOUD}/A7400123_-_P_dzt4hl.jpg`,              pos: "center",     label: "(04) SHOOTING 001 — 04" },
  { area: "6 / 3 / 9 / 4",  img: `${CLOUD}/A7400080_-_P_-_Cinema_ifanny.jpg`,     pos: "center",     label: "(05) SHOOTING 001 — 05" },
  { area: "8 / 1 / 13 / 3", img: `${CLOUD}/A7400095_-_P_-_Cinema_d6evbn.jpg`,     pos: "center",     label: "(06) SHOOTING 001 — 06" },
  { area: "9 / 3 / 13 / 4", img: `${CLOUD}/A7400072_-_P_-_Cinema_yj8wtk.jpg`,     pos: "center",     label: "(07) SHOOTING 001 — 07" },
];

const shootings = [
  { title: "SHOOTING 002", tiles: shooting2tiles, zipName: "shooting-02" },
  { title: "SHOOTING 001", tiles: shooting1tiles, zipName: "shooting-01" },
];

export default function PhotographyPage() {
  return (
    <>
      <TopBar currentPage="photography" theme="light" />

      <div className="sel-dark w-full min-h-screen bg-white text-[#111] flex flex-col items-start pb-[80px] gap-[56px] xs:gap-[40px]">

        {/* Heading */}
        <div className="self-stretch flex flex-col items-start gap-5 px-[30px] xs:px-[18px] pt-[30px]">
          <div className="font-archivo-exp font-extrabold text-[96px] lg:text-[88px] md:text-[68px] sm:text-[52px] xs:text-[38px] leading-[0.84] tracking-[-0.035em]">
            PHOTOGRAPHY.
          </div>
          <p className="m-0 font-mono text-[12px] tracking-[0.06em] text-left opacity-60 sm:hidden xs:hidden">
            All the shootings I directed as a photographer.
          </p>
        </div>

        {shootings.map((s) => (
          <div key={s.title} className="self-stretch flex flex-col gap-4">
            <div className="self-stretch flex items-baseline justify-between gap-4 px-[30px] xs:px-[18px]">
              <span className="font-archivo font-bold text-[22px] xs:text-[18px]">{s.title}</span>
              <span className="font-mono text-[11px] tracking-[0.12em] opacity-55">
                {String(s.tiles.filter(t => t.img).length).padStart(2, "0")} FRAMES — DOWNLOAD ↓
              </span>
            </div>
            <MediaGrid tiles={s.tiles} zipName={s.zipName} />
          </div>
        ))}

      </div>

    </>
  );
}
