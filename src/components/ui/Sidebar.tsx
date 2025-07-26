interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Sidebar({ children, className }: SidebarProps) {
  return (
    <div className={className}>
      {children || 'Sidebar Component'}
    </div>
  );
}