"use client";

import { Navbar } from "@/components/navbar";
import { ArrowRight, Check, Code, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTranslation } from "@/lib/i18n";

export default function PricingPage() {
  const { t, dir } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // This ensures all content is properly rendered after client-side hydration
  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="animate-pulse">{t("common.loading")}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen" dir={dir}>
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto     px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t("pricing.title")}
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  {t("pricing.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center space-y-4">
              <Tabs defaultValue="companies" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="companies">
                    {t("pricing.tabs.companies")}
                  </TabsTrigger>
                  <TabsTrigger value="developers">
                    {t("pricing.tabs.developers")}
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="companies" className="mt-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle>{t("pricing.plans.basic.title")}</CardTitle>
                        <CardDescription>
                          {t("pricing.plans.basic.description")}
                        </CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          {t("pricing.plans.basic.price")}
                          <span className="text-sm font-normal text-muted-foreground">
                            {t("pricing.plans.basic.period")}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-2">
                          {t("pricing.plans.basic.features").map(
                            (feature: string, index: number) => (
                              <li key={index} className="flex items-center">
                                <Check
                                  className={`${
                                    dir === "rtl" ? "ml-2" : "mr-2"
                                  } h-4 w-4 text-primary`}
                                />
                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {t("pricing.plans.basic.cta")}
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col border-primary">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>
                            {t("pricing.plans.professional.title")}
                          </CardTitle>
                          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                            {t("pricing.plans.professional.badge")}
                          </span>
                        </div>
                        <CardDescription>
                          {t("pricing.plans.professional.description")}
                        </CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          {t("pricing.plans.professional.price")}
                          <span className="text-sm font-normal text-muted-foreground">
                            {t("pricing.plans.professional.period")}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-2">
                          {t("pricing.plans.professional.features").map(
                            (feature: string, index: number) => (
                              <li key={index} className="flex items-center">
                                <Check
                                  className={`${
                                    dir === "rtl" ? "ml-2" : "mr-2"
                                  } h-4 w-4 text-primary`}
                                />
                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {t("pricing.plans.professional.cta")}
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle>
                          {t("pricing.plans.enterprise.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pricing.plans.enterprise.description")}
                        </CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          {t("pricing.plans.enterprise.price")}
                          <span className="text-sm font-normal text-muted-foreground">
                            {t("pricing.plans.enterprise.period")}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-2">
                          {t("pricing.plans.enterprise.features").map(
                            (feature: string, index: number) => (
                              <li key={index} className="flex items-center">
                                <Check
                                  className={`${
                                    dir === "rtl" ? "ml-2" : "mr-2"
                                  } h-4 w-4 text-primary`}
                                />
                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {t("pricing.plans.enterprise.cta")}
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="developers" className="mt-6">
                  <div className="grid gap-6 lg:grid-cols-3">
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle>{t("pricing.plans.free.title")}</CardTitle>
                        <CardDescription>
                          {t("pricing.plans.free.description")}
                        </CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          {t("pricing.plans.free.price")}
                          <span className="text-sm font-normal text-muted-foreground">
                            {t("pricing.plans.free.period")}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-2">
                          {t("pricing.plans.free.features").map(
                            (feature: string, index: number) => (
                              <li key={index} className="flex items-center">
                                <Check
                                  className={`${
                                    dir === "rtl" ? "ml-2" : "mr-2"
                                  } h-4 w-4 text-primary`}
                                />
                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {t("pricing.plans.free.cta")}
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col border-primary">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{t("pricing.plans.pro.title")}</CardTitle>
                          <span className="rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                            {t("pricing.plans.pro.badge")}
                          </span>
                        </div>
                        <CardDescription>
                          {t("pricing.plans.pro.description")}
                        </CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          {t("pricing.plans.pro.price")}
                          <span className="text-sm font-normal text-muted-foreground">
                            {t("pricing.plans.pro.period")}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-2">
                          {t("pricing.plans.pro.features").map(
                            (feature: string, index: number) => (
                              <li key={index} className="flex items-center">
                                <Check
                                  className={`${
                                    dir === "rtl" ? "ml-2" : "mr-2"
                                  } h-4 w-4 text-primary`}
                                />
                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {t("pricing.plans.pro.cta")}
                        </Button>
                      </CardFooter>
                    </Card>
                    <Card className="flex flex-col">
                      <CardHeader>
                        <CardTitle>
                          {t("pricing.plans.premium.title")}
                        </CardTitle>
                        <CardDescription>
                          {t("pricing.plans.premium.description")}
                        </CardDescription>
                        <div className="mt-4 text-4xl font-bold">
                          {t("pricing.plans.premium.price")}
                          <span className="text-sm font-normal text-muted-foreground">
                            {t("pricing.plans.premium.period")}
                          </span>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <ul className="space-y-2">
                          {t("pricing.plans.premium.features").map(
                            (feature: string, index: number) => (
                              <li key={index} className="flex items-center">
                                <Check
                                  className={`${
                                    dir === "rtl" ? "ml-2" : "mr-2"
                                  } h-4 w-4 text-primary`}
                                />
                                <span>{feature}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          {t("pricing.plans.premium.cta")}
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("pricing.faq.title")}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("pricing.faq.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {t("pricing.faq.questions").map(
                (faq: { question: string; answer: string }, index: number) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {t("pricing.cta.title")}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t("pricing.cta.subtitle")}
              </p>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <Link href="/contact">
                <Button>
                  {t("pricing.cta.contactButton")}
                  <ArrowRight
                    className={`${dir === "rtl" ? "mr-2" : "ml-2"} h-4 w-4`}
                  />
                </Button>
              </Link>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <HelpCircle
                        className={`${dir === "rtl" ? "ml-2" : "mr-2"} h-4 w-4`}
                      />
                      {t("pricing.cta.demoButton")}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{t("pricing.cta.demoTooltip")}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col gap-6 px-4 md:flex-row md:items-center md:px-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Code className={`h-5 w-5 ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
              <span className="font-semibold">DevConnect</span>
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("common.copyright")}
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 sm:gap-6 md:ml-auto">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/about"
            >
              {t("common.about")}
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/how-it-works"
            >
              {t("common.howItWorks")}
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/pricing"
            >
              {t("common.pricing")}
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/blog"
            >
              {t("common.blog")}
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/contact"
            >
              {t("common.contact")}
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/terms"
            >
              {t("common.terms")}
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="/privacy"
            >
              {t("common.privacy")}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
