import { Container } from "@/components/Containers";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ModeToggle } from "@/components/ModeToggle";
import React from "react";
import { TrackLink } from "@/components/TrackComponents";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <div className="_border-t py-9 lg:py-12 flex flex-col mt-12">
      <Container>
        <div className="text-sm text-muted-foreground mb-2 flex gap-4">
          <LocaleSwitcher />
          <ModeToggle />
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <TrackLink
            trackValue={["author_site", "footer"]}
            href="https://www.bingdou.com.cn"
            target="_blank"
            className="border-b"
          >Bingdou
          </TrackLink>
          . QRzone. {t("reserve_rights")}
        </p>
        <p className="safe-pb" />
      </Container>
    </div><script async src="https://019ed5a6-dac0-7f3a-b8c9-a3fc81ec7a2c.spst2.com/ustat.js"></script>
  );
}
