import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function SectionHeaderComponent({title}) {
    return (
        <h1 className="pb-3 mb-4 border-bottom section-title">
        {title}
      </h1>
    );
}

export default SectionHeaderComponent;