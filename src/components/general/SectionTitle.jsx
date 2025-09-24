// SectionTitle.jsx (Server component)

export default function SectionTitle({ text, color }) {
    return (
        <div 
            className="section-title"
            style={{color: color, border: `2px solid ${color}`}}
        >
            <h4>{text}</h4>
        </div>
    );
}