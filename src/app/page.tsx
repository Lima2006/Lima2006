import { Column, PageBase, Text } from "@core/components";
import HomePageBackground from "@features/home/components/home-page-background";

export default function Home() {
  return (
    <PageBase className="overflow-hidden">
      <HomePageBackground />
      <Column className="z-10 h-screen overflow-auto scrollbar-hide">
        <Column className="mx-[5vw] mt-[35vh] space-y-6 sm:w-min">
          <Text className="text-6xl font-bold drop-shadow sm:whitespace-nowrap">
            Hello!
            <br />
            I&apos;m{" "}
            <span className="-mx-2 rounded-md bg-gray-800 px-2 text-green-400">
              Gabriel Lima
            </span>
            .
          </Text>
          <Text className="text-4xl leading-tight drop-shadow">
            I&apos;m a <u>Frontend Developer</u> dedicated to crafting
            captivating digital experiences.
          </Text>
        </Column>
      </Column>
    </PageBase>
  );
}
