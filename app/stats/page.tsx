"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Legend, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import NavbarGlobal from '@/components/nav-bar-global';
import FooterGlobal from '@/components/footer-global';
import { color } from "framer-motion";

// Mock data - replace with actual data from your Whoop API
const mockData = {
  today: {
    recovery: 85,
    hrv: 65,
    rhr: 52,
    timeSlept: "7h 30m"
  },
  lastMonth: {
    recovery: { green: 20, yellow: 8, red: 2 },
    avgHRV: 62,
    avgRHR: 54,
    avgSleep: "7h 15m",
    avgStrain: 12.5,
    workouts: {
      total: 25,
      byType: { running: 10, cycling: 8, strength: 7 }
    }
  },
  lastYear: {
    recovery: { green: 240, yellow: 100, red: 25 },
    avgHRV: 64,
    avgRHR: 53,
    avgSleep: "7h 20m",
    avgStrain: 13.2,
    workouts: {
      total: 300,
      byType: { running: 120, cycling: 100, strength: 80 }
    }
  },
  allTimeBest: {
    timeSlept: "9h 45m",
    hrv: 95,
    rhr: 48,
    strain: 20.5
  }
}

export default function WhoopStatsDashboard() {
  return (
    <div>
        <NavbarGlobal/>
        <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">Whoop Stats Dashboard</h1>
      
      {/* Today's Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Today</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatItem title="Recovery" value={`${mockData.today.recovery}%`} />
          <StatItem title="HRV" value={mockData.today.hrv} />
          <StatItem title="RHR" value={mockData.today.rhr} />
          <StatItem title="Time Slept" value={mockData.today.timeSlept} />
        </CardContent>
      </Card>

      {/* Last Month Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Last Month</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RecoveryBreakdown data={mockData.lastMonth.recovery} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatItem title="Avg HRV" value={mockData.lastMonth.avgHRV} />
            <StatItem title="Avg RHR" value={mockData.lastMonth.avgRHR} />
            <StatItem title="Avg Sleep" value={mockData.lastMonth.avgSleep} />
            <StatItem title="Avg Strain" value={mockData.lastMonth.avgStrain.toFixed(1)} />
          </div>
          <WorkoutBreakdown data={mockData.lastMonth.workouts} />
        </CardContent>
      </Card>

      {/* Last Year Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Last Year</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RecoveryBreakdown data={mockData.lastYear.recovery} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatItem title="Avg HRV" value={mockData.lastYear.avgHRV} />
            <StatItem title="Avg RHR" value={mockData.lastYear.avgRHR} />
            <StatItem title="Avg Sleep" value={mockData.lastYear.avgSleep} />
            <StatItem title="Avg Strain" value={mockData.lastYear.avgStrain.toFixed(1)} />
          </div>
          <WorkoutBreakdown data={mockData.lastYear.workouts} />
        </CardContent>
      </Card>

      {/* All-time Best */}
      <Card>
        <CardHeader>
          <CardTitle>All-time Best</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <StatItem title="Time Slept" value={mockData.allTimeBest.timeSlept} />
          <StatItem title="HRV (highest)" value={mockData.allTimeBest.hrv} />
          <StatItem title="RHR (lowest)" value={mockData.allTimeBest.rhr} />
          <StatItem title="Strain" value={mockData.allTimeBest.strain.toFixed(1)} />
        </CardContent>
      </Card>
    </div>

    <FooterGlobal/>
    </div>
    
  )
}

function StatItem({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="text-center">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
    </div>
  )
}

function RecoveryBreakdown({ data }: { data: { green: number; yellow: number; red: number } }) {
  const chartData = [
    { name: "Green", value: data.green, color: "#22c55e" },
    { name: "Yellow", value: data.yellow, color: "#eab308" },
    { name: "Red", value: data.red, color: "#ef4444" },
  ]
  const colors = [ "#22c55e","#eab308", "#ef4444"]

  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Recovery Breakdown</h3>
      <ChartContainer
        config={{
          value: {
            label: "Days",
          },
        }}
        className="h-[200px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value">
                {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                
                ))} 
              </Bar> 

          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  )
}

function WorkoutBreakdown({ data }: { data: { total: number; byType: Record<string, number> } }) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Workouts</h3>
      <p className="text-2xl font-semibold mb-2">Total: {data.total}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {Object.entries(data.byType).map(([type, count]) => (
          <div key={type} className="text-sm">
            <span className="font-medium">{type}:</span> {count}
          </div>
        ))}
      </div>
    </div>
  )
}
