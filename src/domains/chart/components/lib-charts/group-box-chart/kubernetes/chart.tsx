/* eslint-disable react/prop-types */
// @ts-nocheck
import React, { useRef, useContext, useLayoutEffect, useState } from "react"
import { ChartContainer } from "domains/chart/components/chart-container"
import { ThemeContext } from "styled-components"
import { Flex, getColor } from "@netdata/netdata-ui"
import ChartOverview from "./chartOverview"

const Chart = ({ id, attributes, relatedIndex }) => {
  const theme = useContext(ThemeContext)
  const chartContainerRef = useRef()
  const [, repaint] = useState()

  useLayoutEffect(() => {
    repaint(true)
  }, [])

  const { chartMetadata, attributes: relatedChartAttributes } = attributes.relatedCharts[
    relatedIndex
  ]

  const chartAttributes = {
    id: chartMetadata.id,

    width: "100%",
    height: "60px",

    chartLibrary: "sparkline",
    sparklineLineWidth: "2px",
    sparklineLineColor: getColor("border")({ theme }),
    sparklineFillColor: getColor("disabled")({ theme }),
    sparklineSpotRadius: 0,

    httpMethod: "POST",
    host: attributes.host,
    nodeIDs: attributes.nodeIDs,
    dimensions: relatedChartAttributes.dimensions,
    aggrMethod: relatedChartAttributes.aggrMethod,
  }

  return (
    <Flex gap={2} column>
      <div ref={chartContainerRef} style={{ height: "60px", width: "100%" }}>
        {chartContainerRef.current && (
          <ChartContainer
            chartUuid={id}
            attributes={chartAttributes}
            chartMetadata={chartMetadata}
            portalNode={chartContainerRef.current}
          />
        )}
      </div>
      <ChartOverview id={id} attributes={attributes} relatedIndex={relatedIndex} />
    </Flex>
  )
}

export default Chart
