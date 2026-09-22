import { Metadata } from "next";
import { notFound } from "next/navigation";
import LawyerProfile from "@/components/sections/LawyerProfile";
import { teamMembers } from "@/lib/site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = teamMembers.find((m) => m.slug === slug);
  if (!member) return { title: "No encontrado" };

  return {
    title: `${member.name} — Consilium Septem`,
    description: member.shortBio,
  };
}

export default async function LawyerPage({ params }: Props) {
  const { slug } = await params;
  const memberIndex = teamMembers.findIndex((m) => m.slug === slug);

  if (memberIndex === -1) {
    notFound();
  }

  const member = teamMembers[memberIndex];
  const prevMember = memberIndex > 0 ? teamMembers[memberIndex - 1] : undefined;
  const nextMember =
    memberIndex < teamMembers.length - 1
      ? teamMembers[memberIndex + 1]
      : undefined;

  return (
    <LawyerProfile member={member} prevMember={prevMember} nextMember={nextMember} />
  );
}
