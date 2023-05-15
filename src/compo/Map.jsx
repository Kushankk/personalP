import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [20, -90, 0],
        center: [-5, -3],
        scale: 300
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#96DED1"
        stroke="black"
        strokeWidth={0.9}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[48, 123]}
        dx={-120}
        dy={-190}
        connectorProps={{
          stroke: "white",
          strokeWidth: 4,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Canada,Victoria(BC)"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
