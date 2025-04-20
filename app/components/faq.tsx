import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

export function Faq() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full md:w-1/2 px-2 xl:px-0"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          À quel âge s&apos;adresse le livre &#34;Foxy et Robin&#34; ?
        </AccordionTrigger>
        <AccordionContent>
          Le livre est conçu pour les enfants de 6 à 10 ans, un âge clé pour les
          sensibiliser aux bons usages d’Internet.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Le contenu est-il adapté aux écoles ?
        </AccordionTrigger>
        <AccordionContent>
          Oui. Des ressources pédagogiques sont disponibles pour les enseignants
          et éducateurs, afin d’intégrer facilement la thématique dans leurs
          cours.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Les parents peuvent-ils utiliser le livre seuls avec leurs enfants ?
        </AccordionTrigger>
        <AccordionContent>
          Absolument. Le livre est pensé pour être lu ensemble, avec des
          dialogues simples et des guides pour accompagner la discussion.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Faut-il des connaissances en informatique pour utiliser les ressources
          ?
        </AccordionTrigger>
        <AccordionContent>
          Pas du tout. Tout est pensé pour être accessible, même sans
          compétences techniques.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Où puis-je trouver les guides pour parents et enseignants ?
        </AccordionTrigger>
        <AccordionContent>
          Les guides sont disponibles gratuitement sur notre site, dans les
          sections dédiées à chaque public.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
