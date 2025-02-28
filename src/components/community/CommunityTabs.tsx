'use client'

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"

interface CommunityTabsProps {
  activeTab: string
  onTabChange: (value: string) => void
}

export function CommunityTabs({ activeTab, onTabChange }: CommunityTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-[400px] grid-cols-3">
        <TabsTrigger value="hot" asChild>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            热门
          </motion.div>
        </TabsTrigger>
        <TabsTrigger value="latest" asChild>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            最新
          </motion.div>
        </TabsTrigger>
        <TabsTrigger value="following" asChild>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            关注
          </motion.div>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
