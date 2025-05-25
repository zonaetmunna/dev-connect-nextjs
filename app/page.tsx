"use client";

import { Navbar } from "@/components/navbar";
import { ArrowRight, CheckCircle, Code, Globe, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  CardAnimation,
  FadeUpSection,
  FloatingElement,
  ParallaxSection,
  StaggeredCards,
  TextReveal
} from "@/components/ui/animations";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslation } from "@/lib/i18n";

export default function Home() {
  const { t, dir, locale } = useTranslation();
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
        <section className="w-full container mx-auto py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <FadeUpSection>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <TextReveal>
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        {t("home.hero.title")}
                      </h1>
                    </TextReveal>
                    <TextReveal delay={0.2}>
                      <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                        {t("home.hero.subtitle")}
                      </p>
                    </TextReveal>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/signup?type=developer">
                      <Button className="w-full">
                        {t("home.hero.developerButton")}
                      </Button>
                    </Link>
                    <Link href="/signup?type=company">
                      <Button className="w-full" variant="outline">
                        {t("home.hero.companyButton")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeUpSection>
              <FloatingElement duration={4} y={15}>
                <div className="flex items-center justify-center">
                  <img
                    alt={t("home.hero.imageAlt")}
                    className="rounded-lg object-cover"
                    height="550"
                    src="/placeholder.svg?height=550&width=550"
                    width="550"
                  />
                </div>
              </FloatingElement>
            </div>
          </div>
        </section>
        <ParallaxSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <FadeUpSection>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      {t("home.howItWorks.title")}
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      {t("home.howItWorks.subtitle")}
                    </p>
                  </div>
                </FadeUpSection>
              </div>
              <StaggeredCards>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                  <CardAnimation>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                        <Users className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">
                        {t("home.howItWorks.profileTitle")}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {t("home.howItWorks.profileDescription")}
                      </p>
                    </div>
                  </CardAnimation>
                  <CardAnimation>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                        <Code className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">
                        {t("home.howItWorks.interviewTitle")}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {t("home.howItWorks.interviewDescription")}
                      </p>
                    </div>
                  </CardAnimation>
                  <CardAnimation>
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                        <Globe className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">
                        {t("home.howItWorks.startTitle")}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {t("home.howItWorks.startDescription")}
                      </p>
                    </div>
                  </CardAnimation>
                </div>
              </StaggeredCards>
            </div>
          </section>
        </ParallaxSection>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FadeUpSection>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {t("home.developers.title")}
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {t("home.developers.subtitle")}
                  </p>
                </div>
              </FadeUpSection>
            </div>
            <StaggeredCards>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <CardAnimation>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-xl font-bold">
                      {t("home.developers.flexibleTitle")}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {t("home.developers.flexibleDescription")}
                    </p>
                  </div>
                </CardAnimation>
                <CardAnimation>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-xl font-bold">
                      {t("home.developers.showcaseTitle")}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {t("home.developers.showcaseDescription")}
                    </p>
                  </div>
                </CardAnimation>
                <CardAnimation>
                  <div className="flex flex-col justify-center space-y-4">
                    <h3 className="text-xl font-bold">
                      {t("home.developers.competitiveTitle")}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {t("home.developers.competitiveDescription")}
                    </p>
                  </div>
                </CardAnimation>
              </div>
            </StaggeredCards>
            <FadeUpSection delay={0.4}>
              <div className="flex justify-center">
                <Link href="/signup?type=developer">
                  <Button>
                    {t("home.developers.joinButton")}
                    <ArrowRight
                      className={`${dir === "rtl" ? "mr-2" : "ml-2"} h-4 w-4`}
                    />
                  </Button>
                </Link>
              </div>
            </FadeUpSection>
          </div>
        </section>
        <ParallaxSection>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <FadeUpSection>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      {t("home.companies.title")}
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                      {t("home.companies.subtitle")}
                    </p>
                  </div>
                </FadeUpSection>
              </div>
              <StaggeredCards>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                  <CardAnimation>
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-xl font-bold">
                        {t("home.companies.vettedTitle")}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {t("home.companies.vettedDescription")}
                      </p>
                    </div>
                  </CardAnimation>
                  <CardAnimation>
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-xl font-bold">
                        {t("home.companies.flexibleTitle")}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {t("home.companies.flexibleDescription")}
                      </p>
                    </div>
                  </CardAnimation>
                  <CardAnimation>
                    <div className="flex flex-col justify-center space-y-4">
                      <h3 className="text-xl font-bold">
                        {t("home.companies.costTitle")}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {t("home.companies.costDescription")}
                      </p>
                    </div>
                  </CardAnimation>
                </div>
              </StaggeredCards>
              <FadeUpSection delay={0.4}>
                <div className="flex justify-center">
                  <Link href="/signup?type=company">
                    <Button>
                      {t("home.companies.joinButton")}
                      <ArrowRight
                        className={`${dir === "rtl" ? "mr-2" : "ml-2"} h-4 w-4`}
                      />
                    </Button>
                  </Link>
                </div>
              </FadeUpSection>
            </div>
          </section>
        </ParallaxSection>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto   px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("home.pricing.title")}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("home.pricing.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>{t("home.pricing.basicTitle")}</CardTitle>
                  <CardDescription>
                    {t("home.pricing.basicDescription")}
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
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.basicPostings")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.basicFiltering")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.basicSupport")}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {t("home.pricing.getStarted")}
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-primary">
                <CardHeader>
                  <CardTitle>{t("home.pricing.professionalTitle")}</CardTitle>
                  <CardDescription>
                    {t("home.pricing.professionalDescription")}
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
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.professionalPostings")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.advancedFiltering")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.prioritySupport")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.skillAssessment")}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {t("home.pricing.getStarted")}
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>{t("home.pricing.enterpriseTitle")}</CardTitle>
                  <CardDescription>
                    {t("home.pricing.enterpriseDescription")}
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
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.unlimitedPostings")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.customFiltering")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.support")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.analytics")}</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`${
                          dir === "rtl" ? "ml-2" : "mr-2"
                        } h-4 w-4 text-primary`}
                      />
                      <span>{t("home.pricing.accountManager")}</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    {t("home.pricing.contactSales")}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {t("home.testimonials.title")}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {t("home.testimonials.subtitle")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Sarah Johnson"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <CardTitle className="text-base">Sarah Johnson</CardTitle>
                      <CardDescription>Senior React Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t("home.testimonials.sarah")}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Michael Chen"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <CardTitle className="text-base">Michael Chen</CardTitle>
                      <CardDescription>CTO, TechSolutions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t("home.testimonials.michael")}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img
                      alt="Emily Rodriguez"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      width="40"
                    />
                    <div>
                      <CardTitle className="text-base">
                        Emily Rodriguez
                      </CardTitle>
                      <CardDescription>Freelance Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t("home.testimonials.emily")}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                {t("home.cta.title")}
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {t("home.cta.subtitle")}
              </p>
            </div>
            <div className="flex gap-4 lg:justify-end">
              <Link href="/signup?type=developer">
                <Button>{t("home.cta.developerButton")}</Button>
              </Link>
              <Link href="/signup?type=company">
                <Button variant="outline">{t("home.cta.companyButton")}</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container mx-auto flex flex-col gap-6 px-4 md:flex-row md:items-center md:px-6">
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
