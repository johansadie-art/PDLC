"use client";

import type { ComponentType } from "react";
import { ThreeActShift } from "./ThreeActShift";
import { AgenticRing } from "./AgenticRing";
import { FiveWFusion } from "./FiveWFusion";
import {
  StandardPdlc,
  SdlcNested,
  ProductOpsDomains,
  KpiFramework,
  QualityDimensions,
  Documentation,
  Dfv,
} from "./explorers";
import {
  PdlcVsSdlc,
  DesignThinking,
  FutureTeam,
  AccountabilityChain,
  ValueRealisation,
  ReleaseCycle,
  ClosedLoop,
  ChangeManagement,
  KpiTransition,
} from "./more";
import { AdlcDimensions } from "./AdlcDimensions";

const REGISTRY: Record<string, ComponentType> = {
  threeActShift: ThreeActShift,
  standardPdlc: StandardPdlc,
  sdlcNested: SdlcNested,
  pdlcVsSdlc: PdlcVsSdlc,
  agenticRing: AgenticRing,
  fiveWFusion: FiveWFusion,
  designThinking: DesignThinking,
  futureTeam: FutureTeam,
  accountabilityChain: AccountabilityChain,
  productOpsDomains: ProductOpsDomains,
  valueRealisation: ValueRealisation,
  closedLoop: ClosedLoop,
  kpiFramework: KpiFramework,
  qualityDimensions: QualityDimensions,
  kpiTransition: KpiTransition,
  dfv: Dfv,
  releaseCycle: ReleaseCycle,
  documentation: Documentation,
  changeManagement: ChangeManagement,
  adlcDimensions: AdlcDimensions,
};

export function Diagram({ diagramKey, caption }: { diagramKey: string; caption?: string }) {
  const Cmp = REGISTRY[diagramKey];
  if (!Cmp) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center text-sm text-fog-500">
        Diagram &ldquo;{diagramKey}&rdquo; not found.
      </div>
    );
  }
  return (
    <figure className="my-2">
      <Cmp />
      {caption && (
        <figcaption className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-fog-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
