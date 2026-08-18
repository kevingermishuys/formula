"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { branches } from "@/content/site";

function pinIconHtml(isHQ: boolean) {
  const size = isHQ ? 40 : 32;
  const fill = isHQ ? "#FFC107" : "#C8102E";
  const dot = isHQ ? "#1A1A1A" : "#FFFFFF";
  return `
    <div style="width:${size}px;height:${size}px;filter:drop-shadow(0 4px 6px rgba(0,0,0,0.35))">
      <svg width="${size}" height="${size}" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 11 16 24 16 24s16-13 16-24c0-8.837-7.163-16-16-16Z" fill="${fill}"/>
        <circle cx="16" cy="16" r="6" fill="${dot}"/>
      </svg>
    </div>
  `;
}

export function BranchMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        maxZoom: 18,
      }).addTo(map);

      const markers = branches.map((branch) => {
        const icon = L.divIcon({
          html: pinIconHtml(branch.isHQ),
          className: "",
          iconSize: branch.isHQ ? [40, 40] : [32, 32],
          iconAnchor: branch.isHQ ? [20, 40] : [16, 32],
          popupAnchor: [0, -32],
        });

        const marker = L.marker([branch.lat, branch.lng], { icon }).addTo(map);
        marker.bindPopup(
          `<div style="font-family:var(--font-inter),sans-serif;min-width:180px">
            ${branch.isHQ ? '<span style="display:inline-block;background:#FFC107;color:#1A1A1A;font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:2px 8px;border-radius:999px;margin-bottom:6px">Head Office</span><br/>' : ""}
            <strong style="font-size:14px;color:#1A1A1A">${branch.name}</strong><br/>
            <span style="font-size:12px;color:#64748B">${branch.address}</span><br/>
            <a href="${branch.phoneHref}" style="font-size:12px;color:#C8102E;font-weight:600;text-decoration:none">${branch.phoneDisplay}</a>
          </div>`
        );
        return marker;
      });

      const bounds = L.latLngBounds(markers.map((m) => m.getLatLng()));
      map.fitBounds(bounds, { padding: [32, 32] });
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="branch-map h-[420px] w-full overflow-hidden rounded-2xl border border-ink/8 sm:h-[520px]"
    />
  );
}
