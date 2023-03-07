import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

type DataProps = {
  label: string;
  content: string;
};

type DataTabsProps = {
  tabs: DataProps[];
};

export default function DataTabs(data: DataTabsProps) {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green" className="mt-9">
      <TabList>
        {data.tabs.map((tab, index) => (
          <Tab key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.tabs.map((tab, index) => (
          <TabPanel p={4} key={index}>
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
