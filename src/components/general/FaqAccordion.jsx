// FaqAccordion.jsx (Client component)
'use client';

import { Accordion } from "@chakra-ui/react";

export default function FaqAccordion({ trans }) {

    const items = [
        {
            question: trans.faq.faq1.question,
            answer: trans.faq.faq1.answer
        },
        {
            question: trans.faq.faq2.question,
            answer: trans.faq.faq2.answer
        },
        {
            question: trans.faq.faq3.question,
            answer: trans.faq.faq3.answer
        },
        {
            question: trans.faq.faq4.question,
            answer: trans.faq.faq4.answer
        },
        {
            question: trans.faq.faq5.question,
            answer: trans.faq.faq5.answer
        },
        {
            question: trans.faq.faq6.question,
            answer: trans.faq.faq6.answer
        },
    ];

    return (
        <div className="faq-accordion">
            <Accordion.Root collapsible >
                {items.map((item, index) => (
                    <Accordion.Item key={index} value={String(index)}>
                        <Accordion.ItemTrigger>
                            <h3>{item.question}</h3>
                            <Accordion.ItemIndicator />
                        </Accordion.ItemTrigger>
                        <Accordion.ItemContent>
                            <Accordion.ItemBody>
                                <p>{item.answer}</p>
                            </Accordion.ItemBody>
                        </Accordion.ItemContent>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    );
}